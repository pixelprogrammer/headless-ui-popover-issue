import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  Button,
  IconButton,
  IconButtonFailure,
  IconButtonWithChild,
} from "./components/button";
import { SquareIcon } from "./components/icon";

function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl">Testing popover issues</h1>
      <p>
        When you click on the last buttons icon, the popover fails to open. Only
        when you click inside the button but not on the SquareIcon will it open
      </p>
      <div>
        <p>This succeeds</p>
        <Popover>
          <PopoverButton as={Button}>Testing</PopoverButton>
          <PopoverPanel className="drop-shadow-2xl border-2 rounded-2xl p-4">
            <div>hello</div>
          </PopoverPanel>
        </Popover>
      </div>
      <div>
        <p>This succeeds</p>
        <Popover>
          <PopoverButton as={Button}>
            <SquareIcon />
          </PopoverButton>
          <PopoverPanel className="drop-shadow-2xl border-2 rounded-2xl p-4">
            <div>hello</div>
          </PopoverPanel>
        </Popover>
      </div>
      <div>
        <p>This succeeds</p>
        <Popover>
          <PopoverButton as={IconButton} icon={<SquareIcon />} />
          <PopoverPanel
            className="drop-shadow-2xl border-2 rounded-2xl p-4"
            anchor="bottom start"
          >
            <div>hello</div>
          </PopoverPanel>
        </Popover>
      </div>
      <div>
        <p>This fails</p>
        <Popover>
          <PopoverButton as={IconButtonFailure} icon={<SquareIcon />} />
          <PopoverPanel
            className="drop-shadow-2xl border-2 rounded-2xl p-4"
            anchor="bottom start"
          >
            <div>hello</div>
          </PopoverPanel>
        </Popover>
      </div>
      <div>
        <p>?????</p>
        <Popover>
          <PopoverButton as={IconButtonWithChild}>
            <SquareIcon />
          </PopoverButton>
          <PopoverPanel
            className="drop-shadow-2xl border-2 rounded-2xl p-4"
            anchor="bottom start"
          >
            <div>hello</div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}

export default App;
