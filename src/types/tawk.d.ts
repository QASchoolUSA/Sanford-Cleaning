declare module '@tawk.to/tawk-messenger-react' {
  interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
  }
  
  const TawkMessengerReact: React.ComponentType<TawkMessengerReactProps>;
  export default TawkMessengerReact;
}