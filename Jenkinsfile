pipeline {
	agent {
		label "Jenkins Runner"
	}

	environment {
		REGISTRY = '192.168.70.20:5000'
		IMAGE_NAME = 'portfolio-front'
	}

	stages {
		stage("Lint") {
			when {
				branch "dev"
			}

			agent {
				docker {
					image "node:22-alpine"
					reuseNode true
				}
			}

			steps {
				sh '''
					set -eu

					corepack enable
					pnpm install --frozen-lockfile

					pnpm format:check
					pnpm lint
				'''
			}
		}

		stage("SonarQube Analysis") {
			when {
				branch "dev"
			}

			agent {
				docker {
					image 'sonarsource/sonar-scanner-cli:latest'
					reuseNode true
				}
			}

			steps {
				withSonarQubeEnv('SonarQue Server') {
					sh '''
					sonar-scanner \
					-Dsonar.projectKey=proxmox-monitor-probe-ui \
					-Dsonar.projectName="Proxmox Monitor Probe UI" \
					-Dsonar.sources=src \
					-Dsonar.sourceEncoding=UTF-8 \
					-Dsonar.exclusions="**/.next/**,**/node_modules/**,**/out/**,**/.next-types/**" \
					-Dsonar.javascript.node.maxspace=4096
					'''
				}
			}
		}

		stage("Docker push") {
			when {
				branch "release/**"
			}
			agent {
				docker {
					image 'docker:cli'
					args '-v /var/run/docker.sock:/var/run/docker.sock'
					reuseNode true
				}
			}
			steps {
				script {
					env.IMAGE_TAG = env.GIT_COMMIT.take(8)
				}

				withCredentials([
					usernamePassword(
						credentialsId: "docker-registry-credentials",
						usernameVariable: "REGISTRY_USERNAME",
						passwordVariable: "REGISTRY_PASSWORD",
					)
				]) {
					sh '''
						set -e

						IMAGE="$REGISTRY/$IMAGE_NAME:$IMAGE_TAG"
                        LATEST="$REGISTRY/$IMAGE_NAME:latest"

                        cleanup() {
                        	docker logout "$REGISTRY" || true
                        	docker image rm "$IMAGE" "$LATEST" || true
                        }

                        trap cleanup EXIT

                        echo "$REGISTRY_PASSWORD" | docker login "$REGISTRY" --username "$REGISTRY_USERNAME" --password-stdin

                        docker build -t "$IMAGE" -t "$LATEST" .

                        docker push "$IMAGE"
                        docker push "$LATEST"
 					'''
				}
			}
		}
	}

	post {
		always {
			cleanWs() // или deleteDir()
		}
	}
}