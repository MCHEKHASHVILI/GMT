const footerModule = {
    namespaced: true,
    state() {
      return {
        footerComponents: [
          { routerLink: "/brands", name: "BRANDS" },
          { routerLink: "/employment", name: "EMPLOYMENT" },
          { routerLink: "/events", name: "EVENTS" },
          { routerLink: "/news", name: "NEWS" },
          { routerLink: "/about", name: "ABOUT US" },
       
      ],
      };
    },
    getters: {
      footerComponents: (state) => state.footerComponents,
    },
  };
  
  export default footerModule;
  