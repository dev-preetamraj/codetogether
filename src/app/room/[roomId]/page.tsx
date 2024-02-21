import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/room/editors/CodeEditor";
import InputEditor from "@/components/room/editors/InputEditor";
import OutputEditor from "@/components/room/editors/OutputEditor";

const RoomPage = () => {
  return (
    <div className="px-10 w-full h-[calc(100vh-4rem)]">
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <ResizablePanel
          defaultSize={60}
          minSize={50}
          maxSize={70}
          className="pr-4"
        >
          <CodeEditor />
        </ResizablePanel>

        <ResizableHandle />

        <ResizablePanel defaultSize={40} className="pl-4">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50} minSize={40} maxSize={60} className="flex flex-col space-y-1">
              <p className="text-sm">input.txt</p>
              <InputEditor />
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel defaultSize={50} className="flex flex-col space-y-1">
              <p className="text-sm">output.txt</p>
              <OutputEditor />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default RoomPage;
