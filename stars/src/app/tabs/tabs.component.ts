import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  tabs = [
    {
      active: true,
      name  : '动态',
      icon  : 'anticon anticon-smile-o'
    },
    {
      active: false,
      name  : '问答',
      icon  : 'anticon anticon-bulb'
    },
    {
      active: false,
      name  : '资源',
      icon  : 'anticon anticon-file'
}
  ];
}
