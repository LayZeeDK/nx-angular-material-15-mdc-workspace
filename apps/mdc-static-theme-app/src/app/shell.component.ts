import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  template: `
    <link href="/components-sidenav.css" rel="stylesheet" />
    <link href="/components-button.css" rel="stylesheet" />
    <link href="/components-divider.css" rel="stylesheet" />
    <link href="/components-icon.css" rel="stylesheet" />
    <link href="/components-list.css" rel="stylesheet" />
    <link href="/components-toolbar.css" rel="stylesheet" />

    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <mat-toolbar>MDC static theme</mat-toolbar>
        <mat-nav-list>
          <span matSubheader>Card</span>
          <a
            mat-list-item
            routerLink="card/basic"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardBasicActive="routerLinkActive"
            [activated]="cardBasicActive.isActive"
            >Basic</a
          >
          <a
            mat-list-item
            routerLink="card/actions"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardActionsActive="routerLinkActive"
            [activated]="cardActionsActive.isActive"
            >Actions</a
          >
          <a
            mat-list-item
            routerLink="card/sections"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardSectionsActive="routerLinkActive"
            [activated]="cardSectionsActive.isActive"
            >Sections</a
          >
          <a
            mat-list-item
            routerLink="card/footer"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardFooterActive="routerLinkActive"
            [activated]="cardFooterActive.isActive"
            >Footer</a
          >
          <a
            mat-list-item
            routerLink="card/media-size"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardMediaSizeActive="routerLinkActive"
            [activated]="cardMediaSizeActive.isActive"
            >Media size</a
          >
          <a
            mat-list-item
            routerLink="card/sub-title"
            routerLinkActive
            [routerLinkActiveOptions]="{ exact: true }"
            #cardSubTitleActive="routerLinkActive"
            [activated]="cardSubTitleActive.isActive"
            >Sub-title</a
          >
          <mat-divider></mat-divider>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span>{{ title$ | async }}</span>
        </mat-toolbar>

        <main>
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      main {
        padding: 1rem 2rem;
      }

      .sidenav-container {
        height: 100%;
      }

      .sidenav {
        width: 200px;
      }

      .sidenav .mat-toolbar {
        background: inherit;
      }

      .mat-toolbar.mat-primary {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  #breakpointObserver = inject(BreakpointObserver);
  #router = inject(Router);

  isHandset$ = this.#breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  title$ = this.#router.events.pipe(
    filter(
      (routerEvent): routerEvent is NavigationEnd =>
        routerEvent instanceof NavigationEnd
    ),
    map(() => this.getRouteTitle(this.#router.routerState.root.snapshot))
  );

  private getRouteTitle(route: ActivatedRouteSnapshot): string {
    let { title } = route;

    while (route.firstChild !== null) {
      route = route.firstChild;
      title = route.title ?? title;
    }

    title ??= '';

    return title;
  }
}
