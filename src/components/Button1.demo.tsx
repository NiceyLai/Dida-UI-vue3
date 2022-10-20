import { Button } from "../lib/index";
export const Button1 = () => {
  return (
    <div>
      <demo>常规使用</demo>
      <div>
        <Button>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
      </div>
    </div>
  );
};
