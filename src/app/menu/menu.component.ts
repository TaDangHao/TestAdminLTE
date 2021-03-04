import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  lstMenu = LIST_MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
export class Menu {
  public icon: string;
  public text: string;
  public routerLink?: string[];
  public active?: boolean;
  public lstChild?: SubMenu[];
}
export class SubMenu {
  public text: string;
  public routerLink?: string[];
  public active?: boolean;
  public click?: string;
}
const LIST_MENU: Menu[] = [
  {
    icon: 'nav-item has-treeview menu-open',
    text: 'Tài khoản',
    lstChild: [
      {
        text: 'Thông tin tài khoản',
        routerLink: ['/thong-tin-tai-khoan']
      },
      {
        text: 'Đổi mật khẩu',
        routerLink: ['/doi-mat-khau']
      }
    ]
  },
  {
    icon: 'nav-item has-treeview menu-open',
    text: 'Tiện ích',
    lstChild: [
      {
        text: 'Chuyển tiền',
        routerLink: ['/test-paren']
      },
      {
        text: 'Nạp tiền',
        routerLink: ['/test-sibling']
      }
    ]
  }
];
