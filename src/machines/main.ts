import { createMachine } from 'xstate';

export const mainMachine = createMachine(
  {
    id: 'Machine v0_0_2',
    type: 'parallel',
    states: {
      main: {
        initial: 'idle',
        states: {
          idle: {
            description: 'When the app is not launched\n',
            on: {
              START: {
                description: 'Start the app',
                target: '#Machine v0_0_2.main.checkingEnvVariables',
              },
            },
          },
          checkingEnvVariables: {
            exit: 'inc',
            description:
              'If you have env variables to load, you check each',
            always: [
              {
                description: 'Environment variables are loaded\n',
                cond: 'EnvironmentsVariablesAreLoaded',
                target: '#Machine v0_0_2.main.preparing',
              },
              {
                actions: 'addNotEnvVariablesError',
                internal: false,
                description: 'Not all envrionment variables are loaded',
                target: '#Machine v0_0_2.main.checkingEnvVariables',
              },
            ],
          },
          preparing: {
            exit: 'inc',
            invoke: {
              src: 'prepare',
              onDone: [
                {
                  target: '#Machine v0_0_2.main.STARTING',
                },
              ],
            },
            description: 'Computer memory checking',
          },
          STARTING: {
            exit: 'inc',
            invoke: {
              src: 'start',
              onDone: [
                {
                  target: '#Machine v0_0_2.main.STARTED',
                },
              ],
            },
            description: 'Caching actions',
          },
          STARTED: {
            initial: 'notAuthenticated',
            description: 'The app is started, first screen',
            states: {
              notAuthenticated: {
                exit: 'inc',
                on: {
                  'LOGIN.EMAIL_PASSWORD': {
                    target:
                      '#Machine v0_0_2.main.STARTED.emailPassword.login',
                  },
                  'REGISTER.EMAIL_PASSWORD': {
                    target:
                      '#Machine v0_0_2.main.STARTED.emailPassword.register',
                  },
                  'LOGIN.FACEBOOK': {
                    target: '#Machine v0_0_2.main.STARTED.facebook.login',
                  },
                  'REGISTER.FACEBOOK': {
                    target:
                      '#Machine v0_0_2.main.STARTED.facebook.register',
                  },
                  'LOGIN.GOOGLE': {
                    target: '#Machine v0_0_2.main.STARTED.google.login',
                  },
                  'REGISTER.GOOGLE': {
                    target: '#Machine v0_0_2.main.STARTED.google.register',
                  },
                  'LOGIN.APPLE': {
                    target: '#Machine v0_0_2.main.STARTED.Apple.login',
                  },
                  'REGISTER.APPLE': {
                    target: '#Machine v0_0_2.main.STARTED.Apple.register',
                  },
                },
              },
              authenticated: {
                exit: 'inc',
                type: 'parallel',
                states: {
                  navigation: {},
                  cart: {},
                },
                on: {
                  LOGOUT: {
                    target:
                      '#Machine v0_0_2.main.STARTED.notAuthenticated',
                  },
                },
              },
              emailPassword: {
                type: 'parallel',
                states: {
                  login: {
                    exit: 'inc',
                    invoke: {
                      src: 'logByEmailPassword',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByEmailPasswordError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                  register: {
                    exit: 'inc',
                    invoke: {
                      src: 'registerByEmailPassword',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByEmailPAsswordError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                },
              },
              facebook: {
                type: 'parallel',
                states: {
                  login: {
                    exit: 'inc',
                    invoke: {
                      src: 'logByFacebook',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'adLogByFacebookError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                  register: {
                    exit: 'inc',
                    invoke: {
                      src: 'registerByFacebook',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByPasswordError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                },
              },
              google: {
                type: 'parallel',
                states: {
                  login: {
                    exit: 'i,nc',
                    invoke: {
                      src: 'logByGoogle',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByGoogleError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                  register: {
                    exit: 'inc',
                    invoke: {
                      src: 'registerByGoogle',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByGoogleError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                },
              },
              Apple: {
                type: 'parallel',
                states: {
                  login: {
                    exit: 'inc',
                    invoke: {
                      src: 'logByApple',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addLogByAppleError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                  register: {
                    exit: 'inc',
                    invoke: {
                      src: 'registerByApple',
                      onDone: [
                        {
                          target:
                            '#Machine v0_0_2.main.STARTED.authenticated',
                        },
                      ],
                      onError: [
                        {
                          actions: 'addRegisterByAppleError',
                          target:
                            '#Machine v0_0_2.main.STARTED.notAuthenticated',
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
      },
      analytics: {
        type: 'parallel',
      },
    },
    tsTypes: {} as import('./main.typegen').Typegen0,
  },
  {},
);
