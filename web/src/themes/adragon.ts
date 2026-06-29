import { ThemeDefinition } from "@adragon-web/themes";

export const adragonTheme: ThemeDefinition = {
  admin: {
    // ─── Table ────────────────────────────────────────────────────────────────
    table: {
      container:
        "bg-white rounded-xl border border-gray-200 overflow-hidden",
      table:
        "w-full text-sm border-collapse",
      row:
        "transition-colors hover:bg-gray-50",
      rowBorder:
        "border-b border-gray-100",
      rowBorderLast:
        "border-b-0",
      headerContainer:
        "flex flex-col gap-3 px-5 py-4 border-b border-gray-100 sm:flex-row sm:items-center sm:justify-between",
      headerLeft:
        "flex items-center gap-2 text-sm text-gray-600",
      headerRight:
        "flex flex-col gap-2 sm:flex-row sm:items-center",
      checkbox:
        "w-10 px-5 py-3 text-left align-middle",
      actionCell:
        "px-4 py-3 text-center align-middle",
      headCell:
        "px-4 py-3 text-left align-middle text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap",
      bodyCell:
        "px-4 py-3 text-sm text-gray-700 align-middle whitespace-nowrap",
      emptyCell:
        "px-4 py-16 text-center",
      searchWrapper:
        "relative",
      searchInput:
        "h-9 w-full rounded-lg border border-gray-200 bg-transparent py-2 pr-4 pl-9 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 xl:w-52",
      searchIcon:
        "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
      pageSelect:
        "border border-gray-200 rounded-lg px-2 py-1 text-sm bg-transparent text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
      button:
        "flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto cursor-pointer",

      // Footer / pagination
      footerContainer:
        "flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50",
      footerText:
        "text-sm text-gray-500",
      paginationWrapper:
        "flex items-center gap-1",
      paginationButton:
        "w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-40 transition-colors",
      paginationButtonActive:
        "w-8 h-8 flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-medium",
    },

    // ─── Listing ──────────────────────────────────────────────────────────────
    listing: {
      // ── Outside card ──────────────────────────────────────────────────────
      headerContainer:
        "flex items-center justify-between gap-3 mb-4",
      headerTitle:
        "text-lg font-semibold text-gray-900",
      headerButtonsWrapper:
        "flex flex-wrap gap-2",
      headerButton:
        "flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors",
      tabsContainer:
        "flex gap-1.5 flex-wrap",
      tabButton:
        "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors border",
      tabButtonActive:
        "bg-gray-900 text-white border-gray-900",
      tabButtonInactive:
        "bg-white text-gray-500 border-gray-200 hover:bg-gray-50",

      // ── White card includes search + table ───────────────────────────────────
      tableCard:
        "bg-white rounded-xl border border-gray-200 overflow-hidden",
      searchBarWrapper:
        "px-5 py-3 border-b border-gray-100",
      searchWrapper:
        "relative w-full max-w-xs",
      searchInput:
        "h-9 w-full rounded-lg border border-gray-200 bg-transparent pl-9 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500",
      searchIcon:
        "absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",

      // ── Inside card ───────────────────────────────────────────────────
      loadingOverlay:
        "absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-xl",
      contentWrapper:
        "relative",

      // ── Delete modal ─────────────────────────────────────────────────────
      deleteModalCancelButton:
        "text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
      deleteModalDeleteButton:
        "text-sm px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors",
      deleteModalButtonsWrapper:
        "flex gap-2 justify-end",
      deleteConfirmation:
        "py-2 text-center",
      deleteConfirmationText:
        "text-sm text-gray-700",
      deleteConfirmationSubtext:
        "mt-1.5 text-xs text-gray-400",
    },

    // ─── Button ───────────────────────────────────────────────────────────────
    button: {
      primary:
        "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
      secondary:
        "flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 transition-colors",
      danger:
        "flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
      ghost:
        "flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-sm font-medium px-3 py-2 rounded-lg transition-colors",
    },

    form: {},

    modal: {},
  },

  home: {
    hero: {},
    productCard: {},
    button: {},
  },
};