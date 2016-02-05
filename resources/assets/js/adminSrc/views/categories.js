/**
 * Return categories view.
 */
var CategoriesView = Backbone.View.extend({
    events: {
        "click .create-category":"clickCreateCategory",
        "click .delete-category": function(e) { this.clickDeleteCategory(e,this.model); }
    },

    initialize: function(ob) {
        var url = ob.route;
        this.model = ob.model;
        this.plantCategoriesView = new PlantCategoriesView();
        this.procedureCategoriesView = new ProcedureCategoriesView();
        this.pestCategoriesView = new PestCategoriesView();
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);
            self.plantCategoriesView.setElement(self.$('.plant-categories')).render();
            self.procedureCategoriesView.setElement(self.$('.procedure-categories')).render();
            self.pestCategoriesView.setElement(self.$('.pest-categories')).render();
        }).error(function(partial) {
            ServerError();
        });

        return self;
    },

    clickCreateCategory: function(e) {
        e.preventDefault();
        AppRouter.navigate('categories/create', {trigger:true} );
    },

    clickDeleteCategory:  function (e,model) {
        e.preventDefault();

        var id = $(e.currentTarget).data('category-id').toString();

        model.set('id',id);

        swal({
                title: 'Are you sure?',
                text: 'You are about to delete this category!',
                type: 'warning',
                confirmButtonColor: "#8DC53E",
                confirmButtonText: "Ok",
                showCancelButton: true,
                closeOnConfirm: false,
                closeOnCancel: true
            },

            function(isConfirm)
            {
                if( isConfirm )
                {
                    model.destroy({
                        wait: true,
                        headers: {
                            'X-CSRF-TOKEN': $('#_token').val()
                        },
                        success: function(model, response) {
                            swal({
                                    title: 'Delete Successful',
                                    text: 'Successfully deleted this category',
                                    type: 'success',
                                    confirmButtonColor: "#8DC53E",
                                    confirmButtonText: "Ok"
                                },

                                function() {
                                    Backbone.history.loadUrl(Backbone.history.fragment);
                                });
                        },

                        error: function() {
                            swal({
                                title: 'Delete Unsuccessful',
                                text: 'Something went wrong deleting this category',
                                type: 'error',
                                confirmButtonColor: "#8DC53E",
                                confirmButtonText: "Ok"
                            });
                        }
                    });
                }
            });
    }
});

/**
 * Return create category view.
 */
var CreateCategoryView = Backbone.View.extend({
    events: {
        "click #createCategory":"clickCreateCategory"
    },

    initialize: function(ob) {
        var url = ob.route;
        this.model = ob.model;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            ServerError();
        });

        return self;
    },

    clickCreateCategory: function(e) {
        e.preventDefault();

        var data = objectSerialize(input('.category-field'));

        this.model.save(data, {
            wait: true,
            success:function(model, response) {
                swal({
                        title: 'Category Created!',
                        text: 'The category '+model.get('category')+'  successfully created.',
                        type: 'success',
                        confirmButtonColor: "#8DC53E",
                        confirmButtonText: "Ok"
                    },
                    function() {
                        AppRouter.navigate('categories', {trigger:true} );
                    });
            },
            error: function(model, errors) {

                if(errors.status == 422)
                {
                    showErrors(errors)
                }

                else ServerError(errors);
            }
        });
    }
});

/**
 * Return edit category view.
 */
var EditCategoryView = Backbone.View.extend({
    events: {
        "click #updateCategory":"clickUpdateCategory"
    },

    initialize: function(ob) {
        var url = ob.route;
        this.model = ob.model;
        this.render(url);
    },

    render: function(url) {
        var self = this;

        DashboardPartial.get(url).done(function(partial){
            self.$el.html(partial);

        }).error(function(partial) {
            ServerError();
        });

        return self;
    },

    clickUpdateCategory: function(e) {
        e.preventDefault();

        var data = objectSerialize(input('.category-field'));

        this.model.save(data, {
            wait: true,
            success:function(model, response) {
                swal({
                        title: 'Category Updated!',
                        text: 'The category '+model.get('category')+'  successfully updated.',
                        type: 'success',
                        confirmButtonColor: "#8DC53E",
                        confirmButtonText: "Ok"
                    },
                    function() {
                        AppRouter.navigate('categories', {trigger:true} );
                    });
            },
            error: function(model, errors) {

                if(errors.status == 422)
                {
                    showErrors(errors)
                }

                else ServerError(errors);
            }
        });
    }
});
