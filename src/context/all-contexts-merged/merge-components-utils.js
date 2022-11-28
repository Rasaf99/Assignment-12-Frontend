/* 🔖 I haven't understood it, just copied it from https://medium.com/front-end-weekly/how-to-combine-context-providers-for-cleaner-react-code-9ed24f20225e */


export default function merge_components (...components){

  return components.reduce(

    (AccumulatedComponents, CurrentComponent) => {

      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        )
      }
    },

    ({ children }) => <>{children}</>,
    
  )
}