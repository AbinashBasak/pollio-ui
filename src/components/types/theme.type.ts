type HeaderType = {
    background : string;
    text : string;
    link : string;
}

type FooterType = {
    background : string;
    text : string;
    link : string;
}

type ColorsType = {
    primary: string;
    secondary : string;
    error : string;
    blur : string;
}

export type ThemeType = {
    nav : HeaderType;
    color : ColorsType;
    footer : FooterType;
}