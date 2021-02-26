import classNames from "classnames";
import React, { FunctionComponent } from "react";
import InfoOutlinedIcon from "../../public/icons/small/info-outlined.svg";
import styles from "./styles.module.css";

interface InfoMessageProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export const InfoMessage: FunctionComponent<InfoMessageProps> = ({
  children,
  className,
}) => (
  <div className={classNames(styles.info, className)}>
    <InfoOutlinedIcon />
    <div>{children}</div>
  </div>
);
