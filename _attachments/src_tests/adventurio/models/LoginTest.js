describe(
		"Example",
		function() {

			var onSuccess, request;

			beforeEach(function() {
				// jasmine.Ajax.useMock();
				// onSuccess = jasmine.createSpy('onSuccess');
			});
			it('should spy on login', function() {
				var spy = sinon.spy();
				var mymodel = new Backbone.Model({});
				mymodel.bind('foo', spy);
				mymodel.trigger('foo');
				expect(spy.called).toBeTruthy();

			});
			it(
					"should Login user",
					function() {

						// onSuccess = jasmine.createSpy('onSuccess');
						var login= {
								request : {},
								response : {},
								callback : {
									spy : { }
								},
								
						};
						
						var checkLogin= {
								request : {},
								response : {},
								callback : {
									spy : { }
								},
								
						};
						
						expect(adventurio.models.UserSingleton.isAuthenticated()).toBe(false);
						// adventurio.models.UserSingleton.login("testuser",
						// "mypasswd");

						this.server = sinon.fakeServer.create();

						
						login.response = '{"ok":true,"name":"simpleUser","roles":[]}';
						login.callback.spy = sinon.spy();
						// $.parseJSON(login.response), login.callback.spy
						adventurio.models.UserSingleton.bind('login', login.callback.spy);
						
						this.server.respondWith("POST", "/_session", [ 200, {
							"Content-Type" : "application/json",
							"Cache-Control"	: "must-revalidate",
							"Content-Length" :	"43",
							"Content-Type":	"application/json",
							"Date" :	"Fri, 03 Feb 2012 14:39:11 GMT",
							"Server" :	"CouchDB/1.1.0 (Erlang OTP/R14B03)",
							"Set-Cookie" :	"AuthSession=c2ltcGxlVXNlcjo0RjJCRjE4RjqImz0TPDt5gc7U6a_rn6gKpODTDQ; Version=1; Path=/; HttpOnly"
						}, login.response]);
						
						
						checkLogin.response = '{"ok" : true,"userCtx" : {"name" : "simpleUser","roles" : []},"info" : {"authentication_db" : "_users","authentication_handlers" : [ "oauth", "cookie", "default" ],"authenticated" : "cookie"}}';
						checkLogin.callback.spy = sinon.spy();
						adventurio.models.UserSingleton.bind('setCurrentUser', checkLogin.response, checkLogin.callback.spy);
						
						this.server.respondWith("GET", "/_session", [ 200, {
							"Content-Type" : "application/json",
							"Cache-Control" : "must-revalidate",
							"Content-Length": "173",
							"Date" : 	"Fri, 03 Feb 2012 14:39:11 GMT",
							"Server" :	"CouchDB/1.1.0 (Erlang OTP/R14B03)"
						}, checkLogin.response ]);

						adventurio.models.UserSingleton.login("myname", "mypassword");
						this.server.respond();
						
//						expect(login.callback.spy).toHaveBeenCalled();
//						expect(login.callback.spy.getCall(0).args[0].attributes).toEqual(login.response);
//
//						expect(checkLogin.callback.spy).toHaveBeenCalled();
//						expect(checkLogin.callback.spy.getCall(0).args[0].attributes).toEqual(checkLogin.response);

						// jQuery.ajax.restore();
						expect(adventurio.models.UserSingleton.isAuthenticated()).toBe(true);

						
						this.server.restore();
						
						
						var response = ({
							"ok" : true,
							"name" : "simpleUser",
							"roles" : []
						});
						// adventurio.models.UserSingleton.checkLogin(response);
						// adventurio.models.UserSingleton.trigger('checkLogin',
						// response);
						// expect(spyOnCallback.called).toBeTruthy();

						request = mostRecentAjaxRequest();

						// expect(onSuccess).toHaveBeenCalled();


					});
		});