export default events = {
    pathChanged: 'pathChanged',
    redirectBack: 'redirectBack',
    redirectForward: 'redirectForward',

    app: {
        start: 'app:start',
        errorPage: 'app:errorPage',
        noAccess: 'app:noAccess',
        errorPageText: 'app:errorPageText',
    },

    header: {
        render: {
            content: 'header:renderContent',
            header: 'header:renderHeader',
        },
        changeActiveButton: 'header:changeActiveButton',
        logout: 'header:logout',
    },
    auth: {
        notLoggedIn: 'auth:notLoggedIn',
        gotUser: 'auth:gotUser',
        changedUser: 'auth:changedUser',
    },

    authPage: {
        redirect: 'authPage:redirect',
        logRegSuccess: 'authPage:logRegSuccess',
    },
    profilePage: {
        changedProfile: 'profilePage:changedProfile',
    },
};