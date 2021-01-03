(function() {var implementors = {};
implementors["async_io"] = [{"text":"impl&lt;T:&nbsp;AsRawFd&gt; AsRawFd for Async&lt;T&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl AsRawFd for Poll","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpStream","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpListener","synthetic":false,"types":[]},{"text":"impl AsRawFd for UdpSocket","synthetic":false,"types":[]}];
implementors["net2"] = [{"text":"impl AsRawFd for TcpBuilder","synthetic":false,"types":[]},{"text":"impl AsRawFd for UdpBuilder","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl AsRawFd for NamedTempFile","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()