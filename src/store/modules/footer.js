const footerModule = {
    namespaced: true,
    state() {
      return {
        footerComponents: [
          { routerLink: "/brands", name: "BRANDS" },
          { routerLink: "/employment", name: "EMPLOYMENT" },
          {alink: "FOLLOW US"},
          { routerLink: "/events", name: "EVENTS" },
          { routerLink: "/about", name: "ABOUT US" },
          { icon: "/src/assets/icons/facebook.svg", icon2: "/src/assets/icons/linkedin.svg" },
          { routerLink: "/news", name: "NEWS" },
       
      ],
      footerComponentsMobile: [
        { routerLink: "/brands", name: "BRANDS" },
        { routerLink: "/employment", name: "EMPLOYMENT" },
        { routerLink: "/events", name: "EVENTS" },
        { routerLink: "/about", name: "ABOUT US" },
        { routerLink: "/news", name: "NEWS" },
        {alink: "FOLLOW US"},
        { icon: "/src/assets/icons/facebook.svg", icon2: "/src/assets/icons/linkedin.svg" },
     
    ],
      };
    },
    getters: {
      footerComponents: (state) => state.footerComponents,
      footerComponentsMobile: (state) => state.footerComponentsMobile,
    },
  };
  
  export default footerModule;
  