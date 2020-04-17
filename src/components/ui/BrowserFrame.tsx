const BrowserFrame: React.SFC = ({ children }) => {
  return (
    <div className="shadow-2xl rounded-md overflow-hidden flex flex-col items-center">
      <Chrome />
      {children}
    </div>
  )
}

const Chrome = () => (
  <div className="light:bg-white px-2 py-2 flex chrome w-full">
    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
    <div className="w-3 h-3 rounded-full bg-green-400"></div>

    <style jsx>{`
      .chrome {
        background: #e5e5e5;
      }

      @screen dark {
        .chrome {
          background: #424445;
        }
      }
    `}</style>
  </div>
)

export default BrowserFrame
