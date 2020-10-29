import { FC } from "react";
import cn from 'classnames';


type NavBackgroundProps = {
  active: boolean
};

export const NavBackground: FC<NavBackgroundProps> = ({ active }) => {
  return <>
    <div className={cn({active})}>
      <span className="left" />
      <span className="right" />
    </div>
    <style jsx>{`
      div {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;

        .left {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 0;
          border-right: solid 1px rgba(255,255,255,0.1);
          background-color: var(--color-text);
          transition: height 0.8s ease-in-out;
          transition-delay: 0.35s;
          z-index: 10;
        }

        .right {
          position: absolute;
          right: 0;
          bottom: 0;
          width: calc(50% + 1px);
          height: 0;
          background-color: var(--color-text);
          transition: height 0.8s ease-in-out;
          transition-delay: 0.35s;
          z-index: 9;
        }

        &.active {
          .left, .right {
            height: 100%;
            transition-delay: 0s;
          }
        }
      }
    `}</style>
  </>;
};