import React from "react";
import { Tabbar } from '@nutui/nutui-react';
import { Cart, Category, Find, Home, My } from '@nutui/icons-react';

const Tabbar = () => (
  <Tabbar fixed>
    <Tabbar.Item title="หน้าหลัก" icon={<Home width={20} height={20} />} />
    <Tabbar.Item title="ภารกิจ" icon={<Category width={20} height={20} />} />
    <Tabbar.Item title="อันดับ" icon={<Find width={20} height={20} />} />
    <Tabbar.Item title="แชท" icon={<Cart width={20} height={20} />} />
    <Tabbar.Item title="ข้อมูล" icon={<My width={20} height={20} />} />
  </Tabbar>
)

export default Tabbar;
