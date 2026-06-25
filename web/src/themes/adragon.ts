import { ThemeDefinition } from "@adragon-web/themes";

export const adragonTheme: ThemeDefinition = {
  admin: {
    table: {
      // Container
      container:
        "bg-white rounded-xl border border-gray-100 overflow-hidden",

      // Table & rows
      table:
        "w-full text-sm border-collapse",
      row:
        "transition-colors hover:bg-gray-50",
      rowBorder:
        "border-b border-gray-50",
      rowBorderLast:
        "border-b-0",

      // Header
      headerContainer:
        "flex flex-col gap-3 px-4 py-3 border-b border-gray-100 sm:flex-row sm:items-center sm:justify-between",
      headerLeft:
        "flex items-center gap-2 text-xs text-gray-400",
      headerRight:
        "flex flex-col gap-2 sm:flex-row sm:items-center",

      // Cells
      checkbox:
        "w-10 px-4 py-2.5 text-left align-middle",
      actionCell:
        "px-4 py-3 text-center align-middle",
      headCell:
        "px-4 py-2.5 text-left align-middle text-xs font-medium text-gray-400 whitespace-nowrap",
      bodyCell:
        "px-4 py-3 text-xs text-gray-700 align-middle whitespace-nowrap",

      // Empty state
      emptyCell:
        "px-4 py-10 text-center text-xs text-gray-400",

      // Search
      searchWrapper:
        "relative",
      searchInput:
        "h-8 w-full rounded-lg border border-gray-200 bg-transparent py-1.5 pr-3 pl-8 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 xl:w-52",
      searchIcon:
        "absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",

      // Select (page size)
      pageSelect:
        "w-16 text-xs border border-gray-200 rounded-lg px-2 py-1 bg-transparent text-gray-700",

      // Buttons
      button:
        "flex w-full items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:w-auto cursor-pointer",
    },

    listing: {
      // Main container
      container:
        "space-y-4",

      // ListingHeader
      headerContainer:
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
      headerTitle:
        "text-base font-medium text-gray-900",
      headerButtonsWrapper:
        "flex flex-wrap gap-2",
      headerButton:
        "text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors",

      // FilterTabs
      tabsContainer:
        "flex gap-1.5 flex-wrap",
      tabButton:
        "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border",
      tabButtonActive:
        "bg-gray-900 text-white border-gray-900",
      tabButtonInactive:
        "bg-white text-gray-500 border-gray-200 hover:bg-gray-50",

      // SearchBar
      searchWrapper:
        "relative w-full max-w-xs",
      searchInput:
        "h-8 w-full rounded-lg border border-gray-200 bg-transparent pl-8 pr-3 text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300",
      searchIcon:
        "absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",

      // LoadingOverlay
      loadingOverlay:
        "absolute inset-0 z-20 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-xl",

      // Content wrapper
      contentWrapper:
        "relative",

      // Delete modal buttons
      deleteModalCancelButton:
        "text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors",
      deleteModalDeleteButton:
        "text-xs px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors",
      deleteModalButtonsWrapper:
        "flex gap-2 justify-end",

      // Delete confirmation text
      deleteConfirmation:
        "py-2 text-center",
      deleteConfirmationText:
        "text-sm text-gray-700",
      deleteConfirmationSubtext:
        "mt-1.5 text-xs text-gray-400",
    },

    button: {
      primary:
        "bg-blue-500 text-white px-4 py-2 rounded",
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
