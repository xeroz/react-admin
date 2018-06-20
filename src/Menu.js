const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Dashboard',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.DASHBOARD',
        label: { value: 3, color: 'success' },
        submenu: [
            {
                name: 'Dashboard v1',
                path: 'dashboard'
            }
        ]
    }
];

export default Menu;
