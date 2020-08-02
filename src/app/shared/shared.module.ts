import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ]
})

export class SharedModule {}
