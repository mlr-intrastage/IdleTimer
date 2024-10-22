using Microsoft.JSInterop;

namespace IdleTimer.Utility.Interop
{
    public class IdleTimerJsInterop
    {
        private readonly IJSRuntime _jsRuntime;

        public IdleTimerJsInterop(IJSRuntime jsRuntime)
        {
            _jsRuntime = jsRuntime;
        }

        public async Task InitializeParentPageTimer()
        {
            await _jsRuntime.InvokeVoidAsync("initializeParentPageTimer");
        }

        public async Task InitializeIframeTimer()
        {
            await _jsRuntime.InvokeVoidAsync("initializeIframeTimer");
        }
    }
}
