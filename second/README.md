## Meta Data
- It's used to set Title and describe the page. (export const metadata={})
- Both "page" and "layout" can have meta data but, "page" meta data is showen when they overlap.
- Meta Data can't work in client compoment. (So we need to make client componenet seperately and import it into the server side)

## replace Attribute
- It used with Link which allow us to send HOme Page, When we press "back" button.

## Link
- When we create NabBar we use Link
- create variable "navLinks", with this we need to use "usePathname()"

- We can see which path is active by 
(i.e, 
    const isActive = pathname == link.href || (pathname.startWith(link.href) && link.href !== "/"); 
)
- now we can add css according to isActive.

## usePath
- It is used to see active link.
```
  const isActive = usePath === link.path || (usePath.startsWith(link.path) && link.path !== "/" ) ;
  Here, 
  usePath = usePathname();
```