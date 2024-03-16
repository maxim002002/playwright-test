//ts-ignore
import { FC } from "react";
import { Button } from "../../Button";

// Отдельные компоненты кнопок с различными пропсами
const PrimaryButton: FC = () => (
  <Button text="Primary" name="primary" className="primary-button" />
);

const DisabledButton: FC = () => (
  <Button text="Disabled" name="primary" disabled className="disabled-button" />
);

const DefaultButton: FC = () => (
  <Button text="Default" name="default" className="default-button" />
);

const DashedButton: FC = () => (
  <Button text="Dashed" name="dashed" className="dashed-button" />
);

const TextButton: FC = () => (
  <Button text="Text" name="text" className="text-button" />
);

const LinkButton: FC = () => (
  <Button text="Link" name="link" className="link-button" />
);

export const TestButtonOnPage: FC = () => {
  return (
    <div className="testButton">
      <div style={{ display: "flex", flexDirection: "column", width: "150px" }}>
        <PrimaryButton />
        <DisabledButton />
        <DefaultButton />
        <DashedButton />
        <TextButton />
        <LinkButton />
      </div>
    </div>
  );
};
