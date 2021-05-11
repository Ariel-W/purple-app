import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'addAccount',
    loadChildren: () =>
      import('./add-account/add-account.module').then(
        (m) => m.AddAccountPageModule
      ),
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsPageModule),
  },
  {
    path: 'altSlidingList',
    loadChildren: () =>
      import('./alt-sliding-list/alt-sliding-list.module').then(
        (m) => m.AltSlidingListPageModule
      ),
  },
  {
    path: 'altThumbnailList',
    loadChildren: () =>
      import('./alt-thumbnail-list/alt-thumbnail-list.module').then(
        (m) => m.AltThumbnailListPageModule
      ),
  },
  {
    path: 'alternativeProfile',
    loadChildren: () =>
      import('./alternative-profile/alternative-profile.module').then(
        (m) => m.AlternativeProfilePageModule
      ),
  },
  {
    path: 'avatarList',
    loadChildren: () =>
      import('./avatar-list/avatar-list.module').then(
        (m) => m.AvatarListPageModule
      ),
  },
  {
    path: 'basicList',
    loadChildren: () =>
      import('./basic-list/basic-list.module').then(
        (m) => m.BasicListPageModule
      ),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./buttons/buttons.module').then((m) => m.ButtonsPageModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarPageModule),
  },
  {
    path: 'calendarEvent',
    loadChildren: () =>
      import('./calendar-event/calendar-event.module').then(
        (m) => m.CalendarEventPageModule
      ),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsPageModule),
  },
  {
    path: 'cloud',
    loadChildren: () =>
      import('./cloud/cloud.module').then((m) => m.CloudPageModule),
  },
  {
    path: 'commerceHome',
    loadChildren: () =>
      import('./commerce-home/commerce-home.module').then(
        (m) => m.CommerceHomePageModule
      ),
  },
  {
    path: 'condensedList',
    loadChildren: () =>
      import('./condensed-list/condensed-list.module').then(
        (m) => m.CondensedListPageModule
      ),
  },
  {
    path: 'condensedSlidingList',
    loadChildren: () =>
      import('./condensed-sliding-list/condensed-sliding-list.module').then(
        (m) => m.CondensedSlidingListPageModule
      ),
  },
  {
    path: 'contactForm',
    loadChildren: () =>
      import('./contact-form/contact-form.module').then(
        (m) => m.ContactFormPageModule
      ),
  },
  {
    path: 'contactFormAlt',
    loadChildren: () =>
      import('./contact-form-alt/contact-form-alt.module').then(
        (m) => m.ContactFormAltPageModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'dayOverview',
    loadChildren: () =>
      import('./day-overview/day-overview.module').then(
        (m) => m.DayOverviewPageModule
      ),
  },
  {
    path: 'dividersList',
    loadChildren: () =>
      import('./dividers-list/dividers-list.module').then(
        (m) => m.DividersListPageModule
      ),
  },
  {
    path: 'dropdowns',
    loadChildren: () =>
      import('./dropdowns/dropdowns.module').then((m) => m.DropdownsPageModule),
  },
  {
    path: 'emptyeventsfirst',
    loadChildren: () =>
      import('./empty-events-first/empty-events-first.module').then(
        (m) => m.EmptyEventsFirstPageModule
      ),
  },
  {
    path: 'emptyeventssecond',
    loadChildren: () =>
      import('./empty-events-second/empty-events-second.module').then(
        (m) => m.EmptyEventsSecondPageModule
      ),
  },
  {
    path: 'emptyeventsthird',
    loadChildren: () =>
      import('./empty-events-third/empty-events-third.module').then(
        (m) => m.EmptyEventsThirdPageModule
      ),
  },
  {
    path: 'emptyeventsfourth',
    loadChildren: () =>
      import('./empty-events-fourth/empty-events-fourth.module').then(
        (m) => m.EmptyEventsFourthPageModule
      ),
  },
  {
    path: 'emptyeventsfifth',
    loadChildren: () =>
      import('./empty-events-fifth/empty-events-fifth.module').then(
        (m) => m.EmptyEventsFifthPageModule
      ),
  },
  {
    path: 'emptyinboxfirst',
    loadChildren: () =>
      import('./empty-inbox-first/empty-inbox-first.module').then(
        (m) => m.EmptyInboxFirstPageModule
      ),
  },
  {
    path: 'emptyinboxsecond',
    loadChildren: () =>
      import('./empty-inbox-second/empty-inbox-second.module').then(
        (m) => m.EmptyInboxSecondPageModule
      ),
  },
  {
    path: 'emptyinboxthird',
    loadChildren: () =>
      import('./empty-inbox-third/empty-inbox-third.module').then(
        (m) => m.EmptyInboxThirdPageModule
      ),
  },
  {
    path: 'emptyinboxfourth',
    loadChildren: () =>
      import('./empty-inbox-fourth/empty-inbox-fourth.module').then(
        (m) => m.EmptyInboxFourthPageModule
      ),
  },
  {
    path: 'emptyfriendsfirst',
    loadChildren: () =>
      import('./empty-friends-first/empty-friends-first.module').then(
        (m) => m.EmptyFriendsFirstPageModule
      ),
  },
  {
    path: 'emptyfriendssecond',
    loadChildren: () =>
      import('./empty-friends-second/empty-friends-second.module').then(
        (m) => m.EmptyFriendsSecondPageModule
      ),
  },
  {
    path: 'emptyfriendsthird',
    loadChildren: () =>
      import('./empty-friends-third/empty-friends-third.module').then(
        (m) => m.EmptyFriendsThirdPageModule
      ),
  },
  {
    path: 'emptyfriendsfourth',
    loadChildren: () =>
      import('./empty-friends-fourth/empty-friends-fourth.module').then(
        (m) => m.EmptyFriendsFourthPageModule
      ),
  },
  {
    path: 'emptyfriendsfifth',
    loadChildren: () =>
      import('./empty-friends-fifth/empty-friends-fifth.module').then(
        (m) => m.EmptyFriendsFifthPageModule
      ),
  },
  {
    path: 'emptynotificationfirst',
    loadChildren: () =>
      import('./empty-notification-first/empty-notification-first.module').then(
        (m) => m.EmptyNotificationFirstPageModule
      ),
  },
  {
    path: 'emptynotificationsecond',
    loadChildren: () =>
      import(
        './empty-notification-second/empty-notification-second.module'
      ).then((m) => m.EmptyNotificationSecondPageModule),
  },
  {
    path: 'emptynotificationthird',
    loadChildren: () =>
      import('./empty-notification-third/empty-notification-third.module').then(
        (m) => m.EmptyNotificationThirdPageModule
      ),
  },
  {
    path: 'emptynotificationfourth',
    loadChildren: () =>
      import(
        './empty-notification-fourth/empty-notification-fourth.module'
      ).then((m) => m.EmptyNotificationFourthPageModule),
  },
  {
    path: 'emptynotificationfifth',
    loadChildren: () =>
      import('./empty-notification-fifth/empty-notification-fifth.module').then(
        (m) => m.EmptyNotificationFifthPageModule
      ),
  },
  {
    path: 'emptyphotosfirst',
    loadChildren: () =>
      import('./empty-photos-first/empty-photos-first.module').then(
        (m) => m.EmptyPhotosFirstPageModule
      ),
  },
  {
    path: 'emptyphotossecond',
    loadChildren: () =>
      import('./empty-photos-second/empty-photos-second.module').then(
        (m) => m.EmptyPhotosSecondPageModule
      ),
  },
  {
    path: 'emptyphotosthird',
    loadChildren: () =>
      import('./empty-photos-third/empty-photos-third.module').then(
        (m) => m.EmptyPhotosThirdPageModule
      ),
  },
  {
    path: 'emptyphotosfourth',
    loadChildren: () =>
      import('./empty-photos-fourth/empty-photos-fourth.module').then(
        (m) => m.EmptyPhotosFourthPageModule
      ),
  },
  {
    path: 'emptyphotosfifth',
    loadChildren: () =>
      import('./empty-photos-fifth/empty-photos-fifth.module').then(
        (m) => m.EmptyPhotosFifthPageModule
      ),
  },
  {
    path: 'emptypurchasesfirst',
    loadChildren: () =>
      import('./empty-purchases-first/empty-purchases-first.module').then(
        (m) => m.EmptyPurchasesFirstPageModule
      ),
  },
  {
    path: 'emptypurchasessecond',
    loadChildren: () =>
      import('./empty-purchases-second/empty-purchases-second.module').then(
        (m) => m.EmptyPurchasesSecondPageModule
      ),
  },
  {
    path: 'emptypurchasesthird',
    loadChildren: () =>
      import('./empty-purchases-third/empty-purchases-third.module').then(
        (m) => m.EmptyPurchasesThirdPageModule
      ),
  },
  {
    path: 'emptypurchasesfourth',
    loadChildren: () =>
      import('./empty-purchases-fourth/empty-purchases-fourth.module').then(
        (m) => m.EmptyPurchasesFourthPageModule
      ),
  },
  {
    path: 'emptypurchasesfifth',
    loadChildren: () =>
      import('./empty-purchases-fifth/empty-purchases-fifth.module').then(
        (m) => m.EmptyPurchasesFifthPageModule
      ),
  },
  {
    path: 'emptysentfirst',
    loadChildren: () =>
      import('./empty-sent-first/empty-sent-first.module').then(
        (m) => m.EmptySentFirstPageModule
      ),
  },
  {
    path: 'emptytasksfirst',
    loadChildren: () =>
      import('./empty-tasks-first/empty-tasks-first.module').then(
        (m) => m.EmptyTasksFirstPageModule
      ),
  },
  {
    path: 'emptytaskssecond',
    loadChildren: () =>
      import('./empty-tasks-second/empty-tasks-second.module').then(
        (m) => m.EmptyTasksSecondPageModule
      ),
  },
  {
    path: 'emptytasksthird',
    loadChildren: () =>
      import('./empty-tasks-third/empty-tasks-third.module').then(
        (m) => m.EmptyTasksThirdPageModule
      ),
  },
  {
    path: 'emptytasksfourth',
    loadChildren: () =>
      import('./empty-tasks-fourth/empty-tasks-fourth.module').then(
        (m) => m.EmptyTasksFourthPageModule
      ),
  },
  {
    path: 'emptytasksfifth',
    loadChildren: () =>
      import('./empty-tasks-fifth/empty-tasks-fifth.module').then(
        (m) => m.EmptyTasksFifthPageModule
      ),
  },
  {
    path: 'emptyvideosfirst',
    loadChildren: () =>
      import('./empty-videos-first/empty-videos-first.module').then(
        (m) => m.EmptyVideosFirstPageModule
      ),
  },
  {
    path: 'emptyvideossecond',
    loadChildren: () =>
      import('./empty-videos-second/empty-videos-second.module').then(
        (m) => m.EmptyVideosSecondPageModule
      ),
  },
  {
    path: 'emptyvideosthird',
    loadChildren: () =>
      import('./empty-videos-third/empty-videos-third.module').then(
        (m) => m.EmptyVideosThirdPageModule
      ),
  },
  {
    path: 'emptyvideosfourth',
    loadChildren: () =>
      import('./empty-videos-fourth/empty-videos-fourth.module').then(
        (m) => m.EmptyVideosFourthPageModule
      ),
  },
  {
    path: 'emptyvideosfifth',
    loadChildren: () =>
      import('./empty-videos-fifth/empty-videos-fifth.module').then(
        (m) => m.EmptyVideosFifthPageModule
      ),
  },
  {
    path: 'emptywalletfirst',
    loadChildren: () =>
      import('./empty-wallet-first/empty-wallet-first.module').then(
        (m) => m.EmptyWalletFirstPageModule
      ),
  },
  {
    path: 'emptywalletsecond',
    loadChildren: () =>
      import('./empty-wallet-second/empty-wallet-second.module').then(
        (m) => m.EmptyWalletSecondPageModule
      ),
  },
  {
    path: 'emptywalletthird',
    loadChildren: () =>
      import('./empty-wallet-third/empty-wallet-third.module').then(
        (m) => m.EmptyWalletThirdPageModule
      ),
  },
  {
    path: 'emptywalletfourth',
    loadChildren: () =>
      import('./empty-wallet-fourth/empty-wallet-fourth.module').then(
        (m) => m.EmptyWalletFourthPageModule
      ),
  },
  {
    path: 'emptywalletfifth',
    loadChildren: () =>
      import('./empty-wallet-fifth/empty-wallet-fifth.module').then(
        (m) => m.EmptyWalletFifthPageModule
      ),
  },
  {
    path: 'eventDetails',
    loadChildren: () =>
      import('./event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'eventsList',
    loadChildren: () =>
      import('./events-list/events-list.module').then(
        (m) => m.EventsListPageModule
      ),
  },
  {
    path: 'expenseOverview',
    loadChildren: () =>
      import('./expense-overview/expense-overview.module').then(
        (m) => m.ExpenseOverviewPageModule
      ),
  },
  {
    path: 'gridTiles',
    loadChildren: () =>
      import('./grid-tiles/grid-tiles.module').then(
        (m) => m.GridTilesPageModule
      ),
  },
  {
    path: 'headersList',
    loadChildren: () =>
      import('./headers-list/headers-list.module').then(
        (m) => m.HeadersListPageModule
      ),
  },
  {
    path: 'homeAlt',
    loadChildren: () =>
      import('./home-alt/home-alt.module').then((m) => m.HomeAltPageModule),
  },
  {
    path: 'iconList',
    loadChildren: () =>
      import('./icon-list/icon-list.module').then((m) => m.IconListPageModule),
  },
  {
    path: 'inputs',
    loadChildren: () =>
      import('./inputs/inputs.module').then((m) => m.InputsPageModule),
  },
  {
    path: 'insetList',
    loadChildren: () =>
      import('./inset-list/inset-list.module').then(
        (m) => m.InsetListPageModule
      ),
  },
  {
    path: 'listThumbCentered',
    loadChildren: () =>
      import('./list-thumb-centered/list-thumb-centered.module').then(
        (m) => m.ListThumbCenteredPageModule
      ),
  },
  {
    path: 'listThumbEnd',
    loadChildren: () =>
      import('./list-thumb-end/list-thumb-end.module').then(
        (m) => m.ListThumbEndPageModule
      ),
  },
  {
    path: 'listThumbStart',
    loadChildren: () =>
      import('./list-thumb-start/list-thumb-start.module').then(
        (m) => m.ListThumbStartPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'loginBackground',
    loadChildren: () =>
      import('./login-background/login-background.module').then(
        (m) => m.LoginBackgroundPageModule
      ),
  },
  {
    path: 'loginFooter',
    loadChildren: () =>
      import('./login-footer/login-footer.module').then(
        (m) => m.LoginFooterPageModule
      ),
  },
  {
    path: 'mail',
    loadChildren: () =>
      import('./mail/mail.module').then((m) => m.MailPageModule),
  },
  {
    path: 'multiLineList',
    loadChildren: () =>
      import('./multi-line-list/multi-line-list.module').then(
        (m) => m.MultiLineListPageModule
      ),
  },
  {
    path: 'noLinesList',
    loadChildren: () =>
      import('./no-lines-list/no-lines-list.module').then(
        (m) => m.NoLinesListPageModule
      ),
  },
  {
    path: 'orderedList',
    loadChildren: () =>
      import('./ordered-list/ordered-list.module').then(
        (m) => m.OrderedListPageModule
      ),
  },
  {
    path: 'paymentHistory',
    loadChildren: () =>
      import('./payment-history/payment-history.module').then(
        (m) => m.PaymentHistoryPageModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
  },
  {
    path: 'profileSettings',
    loadChildren: () =>
      import('./profile-settings/profile-settings.module').then(
        (m) => m.ProfileSettingsPageModule
      ),
  },
  {
    path: 'scheduleDay',
    loadChildren: () =>
      import('./schedule-day/schedule-day.module').then(
        (m) => m.ScheduleDayPageModule
      ),
  },
  {
    path: 'scheduleMonth',
    loadChildren: () =>
      import('./schedule-month/schedule-month.module').then(
        (m) => m.ScheduleMonthPageModule
      ),
  },
  {
    path: 'selectors',
    loadChildren: () =>
      import('./selectors/selectors.module').then((m) => m.SelectorsPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'signupAlt',
    loadChildren: () =>
      import('./signup-alt/signup-alt.module').then(
        (m) => m.SignupAltPageModule
      ),
  },
  {
    path: 'slidingList',
    loadChildren: () =>
      import('./sliding-list/sliding-list.module').then(
        (m) => m.SlidingListPageModule
      ),
  },
  {
    path: 'storage',
    loadChildren: () =>
      import('./storage/storage.module').then((m) => m.StoragePageModule),
  },
  {
    path: 'thumbButtonsList',
    loadChildren: () =>
      import('./thumb-buttons-list/thumb-buttons-list.module').then(
        (m) => m.ThumbButtonsListPageModule
      ),
  },
  {
    path: 'thumbButtonsListAlt',
    loadChildren: () =>
      import('./thumb-buttons-list-alt/thumb-buttons-list-alt.module').then(
        (m) => m.ThumbButtonsListAltPageModule
      ),
  },
  {
    path: 'walkthrough',
    loadChildren: () =>
      import('./walkthrough/walkthrough.module').then(
        (m) => m.WalkthroughPageModule
      ),
  },
  {
    path: 'walkthroughAlt',
    loadChildren: () =>
      import('./walkthrough-alt/walkthrough-alt.module').then(
        (m) => m.WalkthroughAltPageModule
      ),
  },
  {
    path: 'walkthroughSlider',
    loadChildren: () =>
      import('./walkthrough-slider/walkthrough-slider.module').then(
        (m) => m.WalkthroughSliderPageModule
      ),
  },
  {
    path: 'wallet',
    loadChildren: () =>
      import('./wallet/wallet.module').then((m) => m.WalletPageModule),
  },
  {
    path: 'walletAlt',
    loadChildren: () =>
      import('./wallet-alt/wallet-alt.module').then(
        (m) => m.WalletAltPageModule
      ),
  },
  {
    path: 'products-grid',
    loadChildren: () =>
      import('./products-grid/products-grid.module').then(
        (m) => m.ProductsGridPageModule
      ),
  },
  {
    path: 'commerce-home',
    loadChildren: () =>
      import('./commerce-home/commerce-home.module').then(
        (m) => m.CommerceHomePageModule
      ),
  },
  {
    path: 'product-details',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (m) => m.ProductDetailsPageModule
      ),
  },
  {
    path: 'products-list',
    loadChildren: () =>
      import('./products-list/products-list.module').then(
        (m) => m.ProductsListPageModule
      ),
  },
  {
    path: 'product-details-second',
    loadChildren: () =>
      import('./product-details-second/product-details-second.module').then(
        (m) => m.ProductDetailsSecondPageModule
      ),
  },
  {
    path: 'product-details-third',
    loadChildren: () =>
      import('./product-details-third/product-details-third.module').then(
        (m) => m.ProductDetailsThirdPageModule
      ),
  },
  {
    path: 'product-details-fourth',
    loadChildren: () =>
      import('./product-details-fourth/product-details-fourth.module').then(
        (m) => m.ProductDetailsFourthPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./delivery/delivery.module').then((m) => m.DeliveryPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('./confirmation/confirmation.module').then(
        (m) => m.ConfirmationPageModule
      ),
  },
  {
    path: 'order-finish',
    loadChildren: () =>
      import('./order-finish/order-finish.module').then(
        (m) => m.OrderFinishPageModule
      ),
  },
  {
    path: 'order-history',
    loadChildren: () =>
      import('./order-history/order-history.module').then(
        (m) => m.OrderHistoryPageModule
      ),
  },
  {
    path: 'subscribers',
    loadChildren: () =>
      import('./subscribers/subscribers.module').then(
        (m) => m.SubscribersPageModule
      ),
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./friends/friends.module').then((m) => m.FriendsPageModule),
  },
  {
    path: 'followers',
    loadChildren: () =>
      import('./followers/followers.module').then((m) => m.FollowersPageModule),
  },
  {
    path: 'recipes-grid',
    loadChildren: () =>
      import('./recipes-grid/recipes-grid.module').then(
        (m) => m.RecipesGridPageModule
      ),
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./agenda/agenda.module').then((m) => m.AgendaPageModule),
  },
  {
    path: 'sponsors',
    loadChildren: () =>
      import('./sponsors/sponsors.module').then((m) => m.SponsorsPageModule),
  },
  {
    path: 'session-details',
    loadChildren: () =>
      import('./session-details/session-details.module').then(
        (m) => m.SessionDetailsPageModule
      ),
  },
  {
    path: 'speakers',
    loadChildren: () =>
      import('./speakers/speakers.module').then((m) => m.SpeakersPageModule),
  },
  {
    path: 'speaker-details',
    loadChildren: () =>
      import('./speaker-details/speaker-details.module').then(
        (m) => m.SpeakerDetailsPageModule
      ),
  },
  {
    path: 'recipes-list',
    loadChildren: () =>
      import('./recipes-list/recipes-list.module').then(
        (m) => m.RecipesListPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
