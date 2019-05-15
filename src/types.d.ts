declare module "devtron" {
  export function install(): void
}

declare module "*.css" {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}
