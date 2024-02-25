import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/room/editors/CodeEditor";
import InputEditor from "@/components/room/editors/InputEditor";
import OutputEditor from "@/components/room/editors/OutputEditor";
import EditorToolbar from "@/components/room/EditorToolbar";
import SubmissionStatusIndicator from "@/components/room/SubmissionStatusIndicator";

const RoomPage = () => {
  return (
    <div className="px-10 w-full h-[calc(100vh-8rem)]">
      {/* Nav: 4rem; EditorToolbar: 3rem; my: 1rem */}
      <EditorToolbar />
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
            <ResizablePanel defaultSize={50} minSize={40} maxSize={60}>
              <div className="w-full h-full flex flex-col space-y-4">
                <p className="text-sm">input.txt</p>
                <InputEditor />
              </div>
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel defaultSize={50} className="mt-2">
              <div className="w-full h-full flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm">output.txt</p>
                  <SubmissionStatusIndicator />
                </div>
                <OutputEditor />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default RoomPage;
