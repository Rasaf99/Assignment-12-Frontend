

Suppose, you want to show a error message from the JSX:

```jsx

import SHOW_TOAST from 'components/reusable/for-any-project/toastify/show-toast';

...
...

export default function TEST_COMPONENT () {

    ...
    ...

    return(

        <>
    
            <div style={{ display: 'none' }}>
                {isError && <SHOW_TOAST  errorMsg={errorResponse.message}/>}
            </div>
            
        </>

    )

}
```

&nbsp;

**Why am I wrapping `Show_TOAST` component with a `div` tag and providing `display: 'none'` style?**

&nbsp;

Ans: I get a bug when I use this `SHOW_TOAST` component with Material UI.  When UI shows the toast, it also shows some random number. To tackle this problem, I am wrapping the `SHOW_TOAST` component with a `div` tag and and providing it `{display: 'none'}` style 
