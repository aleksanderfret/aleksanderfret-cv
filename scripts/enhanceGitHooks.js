const fs = require('fs');
const path = require('path');
const { EOL } = require('os');

try {
  const defaultHookPath = path.resolve(
    __dirname,
    '../.git/hooks/prepare-commit-msg'
  );

  const additionalHookCode = `
if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master test)
fi

BRANCH_NAME=$(git symbolic-ref --short HEAD)
BRANCH_NAME="\${BRANCH_NAME##*/}"

BRANCH_EXCLUDED=$(printf "%s\\n" "\${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")
BRANCH_IN_COMMIT=$(grep -c "$BRANCH_NAME" $1)

TRIMMED_BRANCH_NAME=$(echo $BRANCH_NAME | sed -e 's:^\\([^_]*_[^_]*\\)_.*:\\1:' -e \\
  'y/abcdefghijklmnopqrstuvwxyz_/ABCDEFGHIJKLMNOPQRSTUVWXYZ-/')

if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then 
  sed -i.bak -e "1s/^/[$TRIMMED_BRANCH_NAME] /" $1
fi

`;

  const defaultHookContent = fs.readFileSync(defaultHookPath, 'utf8');

  const newHookContent = `${defaultHookContent}${EOL}${additionalHookCode}`;

  fs.writeFileSync(defaultHookPath, newHookContent, 'utf8');
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Updating git hook failed... ', error);
}
