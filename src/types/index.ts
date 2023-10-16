import React from 'react';

// Components

type GoogleAnalyticsProps = {
  id: string;
};

export type GoogleAnalyticsComponent = React.FC<GoogleAnalyticsProps>;

// Hooks

export type UseGoogleAnalyticsHook = (id: string) => void;

// Api

export type SupportedEvents =
  | 'add_payment_info'
  | 'add_to_cart'
  | 'add_to_wishlist'
  | 'begin_checkout'
  | 'checkout_progress'
  | 'generate_lead'
  | 'login'
  | 'purchase'
  | 'refund'
  | 'remove_from_cart'
  | 'search'
  | 'select_content'
  | 'set_checkout_option'
  | 'share'
  | 'sign_up'
  | 'view_item'
  | 'view_item_list'
  | 'view_promotion'
  | 'view_search_results'
  | string;

type SupportedCategories = 'engagement' | 'ecommerce' | string;

type SupportedLabels = 'method' | 'search_term' | 'content_type' | string;

type EventParams = {
  non_interaction?: boolean;
  event_category?: SupportedCategories;
  event_label?: SupportedLabels;
  value?: string;
};

export type GoogleAnalyticsApi = {
  pageview: (url: string, id: string) => void;
  event: (name: SupportedEvents, params: EventParams) => void;
};
