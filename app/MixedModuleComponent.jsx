import { printHello } from "../.server/my-module";

export async function loader() {
  console.log(printHello());
}

export default function Component() {
  return (
    <div className="p-2.5">
      <pre className="mt-2.5 max-h-[300px] overflow-auto rounded bg-gray-200 p-2.5 text-xs md:max-h-[600px]">
        <code>Hello World!</code>
      </pre>
    </div>
  );
}
