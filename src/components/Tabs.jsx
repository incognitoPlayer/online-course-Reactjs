import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List className="mt-[64px] pr-4 border-b-[1px]">
        <Tab className="mr-6 border-b-[2px] text-primaryColor font-medium border-primaryColor py-2 px-4">
          Overview Practice
        </Tab>
        <Tab className="mr-6 mb-2">Kerjakan Practice</Tab>
        <Tab className="mr-6 mb-2">Share Practice</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="mt-[64px]">Content 1</Tab.Panel>
        <Tab.Panel className="mt-[64px]">Content 2</Tab.Panel>
        <Tab.Panel className="mt-[64px]">Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
