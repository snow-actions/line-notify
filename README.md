# LINE Notify

[LINE Notify](https://notify-bot.line.me/) for GitHub Actions.

## Usage
```yml
uses: snow-actions/line-notify@v1.0.0
with:
  access_token: ${{ secrets.LINE_ACCESS_TOKEN }}
  message: some message
```

## Example
See [example.yml](.github/workflows/example.yml)
