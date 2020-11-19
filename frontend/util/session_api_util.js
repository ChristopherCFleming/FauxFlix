export const login = user => (
    $.ajax({
        method: 'POST',   
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

window.login = login;   
window.signup = signup;  //doeesn't seem to work...
window.logout = logout;
