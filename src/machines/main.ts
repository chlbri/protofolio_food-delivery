import { createMachine } from 'xstate';

export const mainMachine = createMachine(
  {
    id: 'mainMachine',
    type: 'parallel',
    states: {
      fetch: {
        type: 'parallel',
        states: {
          auth: {
            type: 'parallel',
            states: {
              emailPassword: {
                type: 'parallel',
                states: {
                  login: {
                    states: {
                      idle: {
                        on: {
                          LOG: 'logging',
                        },
                        exit: 'inc',
                      },
                      logging: {
                        invoke: {
                          src: 'logByEmailPassword',
                          onDone: {
                            actions: 'log',
                            target: 'logged',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      logged: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: {
                        exit: 'inc',
                      },
                    },
                  },
                  register: {
                    states: {
                      idle: {
                        on: {
                          REGISTER: 'registering',
                        },
                        exit: 'inc',
                      },
                      registering: {
                        invoke: {
                          src: 'registerByEmailPassword',
                          onDone: {
                            actions: 'log',
                            target: 'registered',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      registered: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                },
              },
              facebook: {
                type: 'parallel',
                states: {
                  login: {
                    states: {
                      idle: {
                        on: {
                          LOG: 'logging',
                        },
                        exit: 'inc',
                      },
                      logging: {
                        invoke: {
                          src: 'logByFacebook',
                          onDone: {
                            actions: 'log',
                            target: 'logged',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      logged: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                  register: {
                    states: {
                      idle: {
                        on: {
                          REGISTER: 'registering',
                        },
                        exit: 'inc',
                      },
                      registering: {
                        invoke: {
                          src: 'registerByFacebook',
                          onDone: {
                            actions: 'log',
                            target: 'registered',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      registered: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                },
              },
              google: {
                type: 'parallel',
                states: {
                  login: {
                    states: {
                      idle: {
                        on: {
                          LOG: 'logging',
                        },
                        exit: 'inc',
                      },
                      logging: {
                        invoke: {
                          src: 'logByGoogle',
                          onDone: {
                            actions: 'log',
                            target: 'logged',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      logged: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                  register: {
                    states: {
                      idle: {
                        on: {
                          REGISTER: 'registering',
                        },
                        exit: 'inc',
                      },
                      registering: {
                        invoke: {
                          src: 'registerByGoogle',
                          onDone: {
                            actions: 'log',
                            target: 'registered',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      registered: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                },
              },
              apple: {
                type: 'parallel',
                states: {
                  login: {
                    states: {
                      idle: {
                        on: {
                          LOG: 'logging',
                        },
                        exit: 'inc',
                      },
                      logging: {
                        invoke: {
                          src: 'logByApple',
                          onDone: {
                            actions: 'log',
                            target: 'logged',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      logged: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                  register: {
                    states: {
                      idle: {
                        on: {
                          REGISTER: 'registering',
                        },
                        exit: 'inc',
                      },
                      registering: {
                        invoke: {
                          src: 'registerByApple',
                          onDone: {
                            actions: 'log',
                            target: 'registered',
                          },
                          onError: 'error',
                        },
                        exit: 'inc',
                      },
                      registered: {
                        after: {
                          20: '#mainMachine.main.started.authenticated',
                        },
                        exit: 'inc',
                      },
                      error: { exit: 'inc' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      errors: {
        initial: 'noError',
        states: {
          noError: { exit: 'inc' },
          errors: {
            type: 'parallel',
            states: {
              environmentsVariablesAreNotLoaded: {
                exit: 'inc',
              },
              preparing: {
                type: 'parallel',
                states: {},
              },
              starting: {
                type: 'parallel',
                states: {},
              },
              auth: {},
            },
          },
        },
      },
      main: {
        initial: 'idle',
        states: {
          idle: {
            on: {
              START: {
                actions: ['loadSome'],
              },
            },
            exit: 'inc',
          },
          checkingEnvVariables: {
            always: [
              {
                cond: 'EnvironmentsVariablesAreLoaded',
                target: 'preparing',
              },
              '#mainMachine.errors.errors.environmentsVariablesAreNotLoaded',
            ],
            exit: 'inc',
          },
          preparing: {
            invoke: {
              src: 'prepare',
              onDone: {
                target: 'starting',
              },
            },
            exit: 'inc',
          },

          starting: {
            invoke: {
              src: 'start',
              onDone: {
                target: 'started',
              },
            },
            exit: 'inc',
          },
          started: {
            states: {
              notAuthenticated: {
                on: {
                  FACEBOOK_LOG: {},
                  FACEBOOK_REGISTER: {},
                  GOOGLE_LOG: {},
                  GOOGLE_REGISTER: {},
                  APPLE_LOG: {},
                  APPLE_REGISTER: {},
                  EMAIL_PASSWORD_LOG: {
                    target:
                      '#mainMachine.fetch.auth.emailPassword.login.logging',
                    actions: ['assignTempEmailAndPassword'],
                  },
                  EMAIL_PASSWORD_REGISTER: {
                    target:
                      '#mainMachine.fetch.auth.emailPassword.register.registering',
                    actions: ['assignTempEmailAndPassword'],
                  },
                },
                exit: 'inc',
              },
              authenticated: {
                type: 'parallel',
                on: {
                  LOGOUT: 'notAuthenticated',
                },
                states: {
                  navigation: {},
                },
                exit: 'inc',
              },
            },
          },
        },
      },
    },
    tsTypes: {} as import('./main.typegen').Typegen0,
  },
  {},
);
