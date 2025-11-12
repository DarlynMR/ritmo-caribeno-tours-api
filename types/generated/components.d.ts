import type { Schema, Struct } from '@strapi/strapi';

export interface PackageFeature extends Struct.ComponentSchema {
  collectionName: 'components_package_features';
  info: {
    displayName: 'package.feature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface TourActivity extends Struct.ComponentSchema {
  collectionName: 'components_tour_activities';
  info: {
    displayName: 'tour.activity';
  };
  attributes: {
    name: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface TourDay extends Struct.ComponentSchema {
  collectionName: 'components_tour_days';
  info: {
    description: 'A day inside a tour';
    displayName: 'tour.day';
  };
  attributes: {
    activities: Schema.Attribute.Component<'tour.activity', true>;
    day_index: Schema.Attribute.Integer;
    description: Schema.Attribute.RichText;
    places: Schema.Attribute.Component<'tour.place', true>;
    time_range: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TourPlace extends Struct.ComponentSchema {
  collectionName: 'components_tour_places';
  info: {
    displayName: 'tour.place';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'package.feature': PackageFeature;
      'tour.activity': TourActivity;
      'tour.day': TourDay;
      'tour.place': TourPlace;
    }
  }
}
