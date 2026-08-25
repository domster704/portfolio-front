import style from "./SkillsMarquee.module.scss";

interface SkillsMarqueeProps {
  skills: readonly string[];
}

const SkillsMarquee = ({ skills }: SkillsMarqueeProps) => {
  return (
    <div className={style.skillContainer}>
      <div className={style.skillScroll}>
        {[...skills, ...skills].map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
