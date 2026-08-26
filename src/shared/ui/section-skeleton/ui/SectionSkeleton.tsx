import style from "./SectionSkeleton.module.scss";
import Wrapper from "@shared/ui/wrapper";

const SectionSkeleton = () => {
  return (
    <Wrapper>
      <div className={style.skeleton} role="status" aria-label="Loading">
        <div className={style.label} />
        <div className={style.title} />

        <div className={style.content}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionSkeleton;
