import {
  AppBar,
  Box,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SUPPORT_LANGUAGE } from "@/configs/language";
import i18next from "i18next";
import { useRouter } from "next/router";

const Navbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  const [currentLng, setCurrentLng] = useState(i18next.language);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const chnageLngi18n = async (lng: string) => {
    await i18next.changeLanguage(lng);
  };

  const handleChangeLng = async (value: string) => {
    localStorage.setItem("lng", value);
    chnageLngi18n(value);
    setCurrentLng(value);
    setOpen(false);
    router.reload();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localLng = localStorage.getItem("lng");
      chnageLngi18n(localLng ?? i18next.language);
      setCurrentLng(localLng ?? i18next.language);
    }
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#2196f3", height: 50 }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "end",
              minHeight: "50px !important",
            }}
          >
            <div>
              <button
                ref={anchorRef}
                onClick={handleToggle}
                style={{
                  backgroundColor: "#fff",
                  height: 50,
                  minWidth: 64,
                  border: "3px solid #1976d2",
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {currentLng}
              </button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open}>
                          {SUPPORT_LANGUAGE.map((lng) => (
                            <MenuItem
                              key={lng.value}
                              onClick={() => {
                                handleChangeLng(lng.value);
                              }}
                              disabled={currentLng === lng.value}
                              sx={{ minWidth: 100 }}
                            >
                              {lng.nativeName}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

export default Navbar;
