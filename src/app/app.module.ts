import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	TableModule,
	InputModule,
	SelectModule,
	ButtonModule,
	AccordionModule,
	LoadingModule,
	ModalModule
} from 'carbon-components-angular';
import { StarterHomeComponent } from './starter-home/starter-home.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsAddComponent } from './claims-add/claims-add.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		StarterHomeComponent,
		ClaimsListComponent,
		ClaimsAddComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		UIShellModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		GridModule,
		ListModule,
		TabsModule,
		TilesModule,
		TableModule,
		InputModule,
		SelectModule,
		ButtonModule,
		AccordionModule,
		LoadingModule,
		ModalModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
