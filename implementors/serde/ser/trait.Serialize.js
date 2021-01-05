(function() {var implementors = {};
implementors["ferrite_session"] = [{"text":"impl Serialize for Bottom","synthetic":false,"types":[]},{"text":"impl&lt;A, B&gt; Serialize for Sum&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Serialize,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Row, F&gt; Serialize for AppliedSum&lt;Row, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: TyCon,<br>&nbsp;&nbsp;&nbsp;&nbsp;Row: RowApp&lt;F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Row::Applied: Send + 'static + Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F, X, T&gt; Serialize for Applied&lt;F, X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: TypeApp&lt;X, Applied = T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Receiver&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for Sender&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for ReceiverOnce&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for SenderOnce&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for End","synthetic":false,"types":[]},{"text":"impl&lt;T, A&gt; Serialize for SendValue&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, A&gt; Serialize for ReceiveValue&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Row&gt; Serialize for InternalChoice&lt;Row&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Row: RowCon,<br>&nbsp;&nbsp;&nbsp;&nbsp;AppliedSum&lt;Row, ReceiverF&gt;: Send + 'static + Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Row&gt; Serialize for ExternalChoice&lt;Row&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Row: RowCon,<br>&nbsp;&nbsp;&nbsp;&nbsp;AppliedSum&lt;Row, ()&gt;: Send + 'static + Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;AppliedSum&lt;Row, ReceiverF&gt;: Send + 'static + Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; Serialize for SharedChannel&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: SharedProtocol + Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F&gt; Serialize for LinearToShared&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: SharedRecApp&lt;SharedToLinear&lt;F&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F::Applied: Serialize + for&lt;'de&gt; Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;F&gt; Serialize for SharedToLinear&lt;F&gt;","synthetic":false,"types":[]}];
implementors["ipc_channel"] = [{"text":"impl&lt;T&gt; Serialize for IpcReceiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for IpcSender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for IpcSharedMemory","synthetic":false,"types":[]},{"text":"impl Serialize for OpaqueIpcSender","synthetic":false,"types":[]},{"text":"impl Serialize for OpaqueIpcReceiver","synthetic":false,"types":[]},{"text":"impl Serialize for IpcBytesReceiver","synthetic":false,"types":[]},{"text":"impl Serialize for IpcBytesSender","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()