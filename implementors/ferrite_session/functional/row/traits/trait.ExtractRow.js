(function() {var implementors = {};
implementors["auth"] = [{"text":"impl&lt;PasswordT, ChallengeT&gt; ExtractRow&lt;AuthChoiceChoice&lt;PasswordT, ChallengeT&gt;&gt; for Sum&lt;PasswordT, Sum&lt;ChallengeT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;SuccessT, FailureT&gt; ExtractRow&lt;AuthResultChoice&lt;SuccessT, FailureT&gt;&gt; for Sum&lt;SuccessT, Sum&lt;FailureT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;PublishT, SubscribeT&gt; ExtractRow&lt;PubSubChoiceChoice&lt;PublishT, SubscribeT&gt;&gt; for Sum&lt;PublishT, Sum&lt;SubscribeT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;SendMessageT, StopPublishT&gt; ExtractRow&lt;PublishActionChoice&lt;SendMessageT, StopPublishT&gt;&gt; for Sum&lt;SendMessageT, Sum&lt;StopPublishT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;PollT, StopSubscribeT&gt; ExtractRow&lt;SubscribeActionChoice&lt;PollT, StopSubscribeT&gt;&gt; for Sum&lt;PollT, Sum&lt;StopSubscribeT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;TimeoutT, MessageEventT, EndedT&gt; ExtractRow&lt;SubscribeEventChoice&lt;TimeoutT, MessageEventT, EndedT&gt;&gt; for Sum&lt;TimeoutT, Sum&lt;MessageEventT, Sum&lt;EndedT, Bottom&gt;&gt;&gt;","synthetic":false,"types":[]}];
implementors["channel"] = [{"text":"impl&lt;NextT, CloseT&gt; ExtractRow&lt;ReceiverOptionChoice&lt;NextT, CloseT&gt;&gt; for Sum&lt;NextT, Sum&lt;CloseT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;ReceiveNextT, SendNextT&gt; ExtractRow&lt;ChannelOptionChoice&lt;ReceiveNextT, SendNextT&gt;&gt; for Sum&lt;ReceiveNextT, Sum&lt;SendNextT, Bottom&gt;&gt;","synthetic":false,"types":[]}];
implementors["custom_choice"] = [{"text":"impl&lt;FooT, BarT, BazT, QuuxT&gt; ExtractRow&lt;FooBarBazChoice&lt;FooT, BarT, BazT, QuuxT&gt;&gt; for Sum&lt;FooT, Sum&lt;BarT, Sum&lt;BazT, Sum&lt;QuuxT, Bottom&gt;&gt;&gt;&gt;","synthetic":false,"types":[]}];
implementors["restaurant"] = [{"text":"impl&lt;MushroomMenuT, TomatoMenuT&gt; ExtractRow&lt;SoupMenuChoice&lt;MushroomMenuT, TomatoMenuT&gt;&gt; for Sum&lt;MushroomMenuT, Sum&lt;TomatoMenuT, Bottom&gt;&gt;","synthetic":false,"types":[]},{"text":"impl&lt;BeefMenuT, PorkMenuT&gt; ExtractRow&lt;MainMenuChoice&lt;BeefMenuT, PorkMenuT&gt;&gt; for Sum&lt;BeefMenuT, Sum&lt;PorkMenuT, Bottom&gt;&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()