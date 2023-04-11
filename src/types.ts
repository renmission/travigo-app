export interface INavLink {
  link: string;
  id: string;
}

export interface IMemory {
  memory: {
    title: string;
    subtitle: string;
    text: string;
    img: string;
    experience: [
      {
        number: string;
        title: string;
      }
    ];
  };
}

export interface Plancontent {
  iconbox: string;
  text: string;
}

export interface Plan {
  planicon: string;
  title: string;
  text: string;
  plantype: string;
  plancontent: Plancontent[];
  buttonText: string;
}
