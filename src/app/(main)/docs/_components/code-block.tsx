import { highlightCode } from "@/lib/highlight";
import { CodeSurface } from "@/components/code-surface";
import { CodeCopyButton } from "@/components/code-copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopyButton?: boolean;
}

export async function CodeBlock({
  code,
  language = "tsx",
  showCopyButton = true,
}: CodeBlockProps) {
  const highlighted = await highlightCode(code, language);

  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      {showCopyButton && (
        <div className="absolute top-2 right-2 z-10">
          <CodeCopyButton text={code} />
        </div>
      )}
      <CodeSurface className="overflow-auto" html={highlighted} />
    </div>
  );
}
