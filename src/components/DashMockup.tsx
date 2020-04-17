import BrowserFrame from './ui/BrowserFrame'

const DashMockup = () => {
  return (
    <BrowserFrame>
      <div className="w-full h-full bg-page-primary dark:bg-gray-darkest leading-7">
        <div className="bg-fg-accent h-1 w-full opacity-25"></div>
        <div className="px-8 sm:px-16 md:px-24 my-6">
          <h2 className="text-lg text-fg-secondary">
            Your Giving for <strong>December, 2019</strong>
          </h2>
          <div className="h-2"></div>

          <div className="flex justify-between items-center">
            <p className="font-bold">Climate Change</p>
            <p className="font-bold text-fg-accent">$12.50</p>
          </div>
          <div className="pl-6 text-sm font-medium">
            <div className="flex justify-between items-center">
              <p>☀️ Renewable Energy</p>
              <p className="text-fg-secondary">$4.50</p>
            </div>
            <div className="flex justify-between items-center">
              <p>🦖 Carbon Offsets</p>
              <p className="text-fg-secondary">$3.50</p>
            </div>
            <div className="flex justify-between items-center">
              <p>🌳Reforestation</p>
              <p className="text-fg-secondary">$4.50</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-bold">Disaster Response</p>
            <p className="font-bold text-fg-accent">$7.00</p>
          </div>
          <div className="pl-6 text-sm font-medium">
            <div className="flex justify-between items-center">
              <p>🚑 First Responders </p>
              <p className="text-fg-secondary">$4.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p>🏠 Food & Shelter</p>
              <p className="text-fg-secondary">$3.50</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export default DashMockup
