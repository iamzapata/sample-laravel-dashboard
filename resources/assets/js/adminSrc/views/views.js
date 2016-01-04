/**
 * Parent View
 *
 * All other views render inside this container.
 */
var ContainerView = Backbone.View.extend({

    // Container for dashboard partials.
    ChildView: null,

    render: function() {
        if(this.ChildView) {
            this.$el.html(this.ChildView.$el);
            this.ChildView.delegateEvents();
            return this;
        }
    }
});

/**
 * Return admin accounts view.
 */
var AdminAccountsView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route; // eg. /admin/dashboard/accounts.
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return application's users view.
 */
var UsersView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return system notifications view.
 */
var SystemNotificationsView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return users subscription plans view.
 */
var PlansView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return plant library view.
 */
var PlantLibraryView = Backbone.View.extend({

        initialize: function(ob) {
            var url = ob.route;
            this.render(url);
        },

        render: function(url) {
            var self = this;

            DashboardPartial.get(url).done(function(partial){
                self.$el.html(partial);

            }).error(function(partial) {
                serverError();
            });

            return self;
        }
    });

/**
 * Return show single plant view.
 */
var ShowPlantView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return create plant view.
 */
var CreatePlantView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return edit plant view.
 */
var EditPlantView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return culinary plants library.
 */
var CulinaryPlantLibraryView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return pest library view.
 */
var PestLibraryView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return procedure library view.
 */
var ProcedureLibraryView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return website pages view.
 */
var WebsitePagesView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return categories view.
 */
var CategoriesView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return journal entries view.
 */
var JournalView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return glossary words view.
 */
var GlossaryView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return links
 */
var LinksView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return user's suggestions messages view.
 */
var UserSuggestionsView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return what's this messages view.
 */
var WhatsThisView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return general messages out.
 */
var GeneralMessagesView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return payment api settings view.
 */
var PaymentConnectorView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return outbound api's connections settings view.
 */
var ApisConnectionView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return admin dashboard profile view.
 */
var AdminProfileView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});

/**
 * Return admin dashboard settings view.
 */
var AdminDashboardSettingsView = Backbone.View.extend({

    initialize: function(ob) {
        var url = ob.route;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            serverError();
        });

        return self;
    }
});