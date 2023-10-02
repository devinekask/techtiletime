---
title: Vpype
description: The Swiss Army knife for vector graphics
---


[Vpype](https://vpype.readthedocs.io) really is a versitile tool to generate, optimize, transform and exporting vector graphics. It is a command line tool written in Python, so you do need some technical knowledge to use it.

:::caution
If you are not familiar with the command line or Python, you might want to skip this.
:::

## Installation

Although there is an [installation guide for vpype](https://vpype.readthedocs.io/en/latest/install.html#), doing installs for a Python project can be a bit tricky. So we will go through the steps here and ajust them for our needs.

### Homebrew

Install [Homebrew](https://devinekask.github.io/workflows/homebrew-01-intro), we will use this to install other tools.

Check which python version you currently have installed.

```shell
python3 --version
```

This should be 3.10. Vpype doesn't work with python 3.11 at the time of writing. If you do have Python 3.10 installed, you could skip the pyenv install part, but it is recommended to use pyenv to manage your python versions anyhow.

Don't worry if you have got an error, we will install python 3.10 with pyenv.

### Python version manager

install pyenv with homebrew

```shell
brew install pyenv
```

Reboot your terminal, you can do this with the following command or simply close and re-open your terminal.

```shell
source ~/.zshrc
``````

Install python 3.10 with pyenv

```shell
pyenv install 3.10
```

Don't forget to [set up your shell environment](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv) for pyenv. For zsh, this is done by running the following lines:

```shell
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

Reboot/reload your terminal. Check if the installation went well by running the following command. This should return a version number starting with 3.10

```shell
pyenv versions
```

optionally: set the global python version to 3.10

```shell
pyenv global 3.10
```

### Pipx

[Pipx](https://pypa.github.io/pipx/) is a tool that allows you to install Python applications in isolated environments. This wil make the `vpype` command available in your terminal.
We will install this via homebrew.

```shell
brew install pipx
pipx ensurepath
```

### Vpype

Now we can install vpype with pipx, we will specify to use python 3.10 for this

```shell
pipx install --python python3.10 "vpype[all]"
```

Vpype should now be installed and ready to use. You may check that it is fully functional by having a look at its version or displaying some random lines:

```shell
vpype --version
vpype random show
```

### Plugins

If you got vpype working, then you can install some plugins. In this tutorial, we will install the [embroidery](https://github.com/EmbroidePy/vpype-embroidery) plugin.

```shell
pipx inject vpype vpype-embroidery
```

As stated in the documentation of the plugin, you can try this out by running the following command:

```shell
vpype begin grid -o 25 25 10 10 circle 0 0 100 end efill sho
```
