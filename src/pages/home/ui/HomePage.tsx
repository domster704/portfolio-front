import {type FC} from 'react';
import style from './HomePage.module.css'

interface HomePageProps {

}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={style.content}>
      content
    </div>
  );
}

export default HomePage;
