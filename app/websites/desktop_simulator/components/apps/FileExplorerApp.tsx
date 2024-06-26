"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LucideIcon, Wallpaper } from "lucide-react";

interface FolderDropdown {
  id: string;
  label: string;
  icon: LucideIcon;
  isFile: boolean;
  children?: FolderDropdown[];
}

const Tabs: FolderDropdown[] = [
  {
    id: "quick_access",
    label: "Quick Access",
    icon: Wallpaper,
    isFile: false,
    children: [],
  },
  {
    id: "thic_pc",
    label: "This PC",
    icon: Wallpaper,
    isFile: false,
    children: [
      { id: "3d_objects", label: "3D Objects", icon: Wallpaper, isFile: false },
      { id: "desktop", label: "Desktop", icon: Wallpaper, isFile: false },
      { id: "documents", label: "Documents", icon: Wallpaper, isFile: false },
      { id: "downloads", label: "Downloads", icon: Wallpaper, isFile: false },
      { id: "music", label: "Music", icon: Wallpaper, isFile: false },
      { id: "pictures", label: "Pictures", icon: Wallpaper, isFile: false },
      { id: "videos", label: "Videos", icon: Wallpaper, isFile: false },
      {
        id: "local_disk_c",
        label: "Local Disk (C:)",
        icon: Wallpaper,
        isFile: false,
      },
    ],
  },
  {
    id: "network",
    label: "Network",
    icon: Wallpaper,
    isFile: false,
    children: [],
  },
];

function FolderDropdownAccordion({
  folderDropdown,
}: {
  folderDropdown: FolderDropdown;
}) {
  return (
    <Accordion type="multiple">
      <AccordionItem value={folderDropdown.id}>
        <AccordionTrigger>{folderDropdown.label}</AccordionTrigger>
        <AccordionContent>
          {folderDropdown.children?.map((childDropdown, childIndex) => {
            return childDropdown.isFile ? (
              <Button
                key={childIndex}
                variant="outline"
                className="mt-4 w-full"
              >
                {childDropdown.label}
              </Button>
            ) : (
              <FolderDropdownAccordion
                key={childIndex}
                folderDropdown={childDropdown}
              />
            );
          })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default function FileExplorerApp() {
  return (
    <div className="flex h-full w-full select-none flex-col">
      <Menubar className="rounded-none border-0 border-b bg-transparent">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Help</MenubarItem>
            <MenubarItem>Close</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Pin to Quick access</MenubarItem>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Copy path</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
            <MenubarItem>Paste shortcut</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Move to</MenubarItem>
            <MenubarItem>Copy to</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Delete</MenubarItem>
            <MenubarItem>Rename</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>New Folder</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Share</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Share</MenubarItem>
            <MenubarItem>Email</MenubarItem>
            <MenubarItem>Zip</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Burn to disc</MenubarItem>
            <MenubarItem>Print</MenubarItem>
            <MenubarItem>Fax</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Navigation pane</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarCheckboxItem checked>
                  Navigation pane
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Expand to open folder</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show all folders</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show libraries</MenubarCheckboxItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarCheckboxItem>Preview pane</MenubarCheckboxItem>
            <MenubarCheckboxItem>Details pane</MenubarCheckboxItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ResizablePanelGroup direction="horizontal" className="flex flex-1">
        <ResizablePanel defaultSize={15} minSize={10} maxSize={25}>
          <div className="flex h-full flex-col p-6">
            {Tabs.map((tab, tabIndex) => (
              <FolderDropdownAccordion key={tabIndex} folderDropdown={tab} />
            ))}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full flex-col p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
