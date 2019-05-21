# Labs features

Some notes on the features you can enable by going to `Settings->Labs`. Not exhaustive, chat in
[#riot-web:matrix.org] for more information.

**Be warned! Labs features are not finalised, they may be fragile, they may change, they may be
dropped. Ask in the room if you are unclear about any details here.**

## Render simple counters in room header

Allows rendering of labelled counters above the message list.

Once enabled, send a custom state event to a room to set values:

1. In a room, type `/devtools` to bring up the devtools interface
2. Click "Send Custom Event"
3. Toggle from "Event" to "State Event"
4. Set the event type to: `re.jki.counter` and give it a unique key
5. Specify the content in the following format:

```
{
    "link": "",
    "severity": "normal",
    "title": "my counter",
    "value": 0
}
```

That's it. Now should see your new counter under the header.

## Reactions

`feature_reactions` allows reacting to messages with emoji and displaying
reactions from other people. This feature is currently under active development,
and only portions have been implemented so far.

## Message editing

`feature_message_editing` allows editing messages after they have been sent,
accessible from the reaction/context bar when hovering a message.
This feature is currently under active development,
and only portions have been implemented so far.

[#riot-web:matrix.org]: https://matrix.to/#/#riot-web:matrix.org
